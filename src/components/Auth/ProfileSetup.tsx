import { X, Upload, FileText, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';

interface ProfileSetupProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

type DocType = 'passport' | 'emiratesId' | 'drivingLicense';

interface Document {
  type: DocType;
  file: File | null;
  preview: string | null;
  status: 'pending' | 'uploaded' | 'verified';
}

export default function ProfileSetup({ isOpen, onClose, onComplete }: ProfileSetupProps) {
  const [documents, setDocuments] = useState<Document[]>([
    { type: 'passport', file: null, preview: null, status: 'pending' },
    { type: 'emiratesId', file: null, preview: null, status: 'pending' },
    { type: 'drivingLicense', file: null, preview: null, status: 'pending' }
  ]);

  const fileInputRefs = {
    passport: useRef<HTMLInputElement>(null),
    emiratesId: useRef<HTMLInputElement>(null),
    drivingLicense: useRef<HTMLInputElement>(null)
  };

  if (!isOpen) return null;

  const getDocumentLabel = (type: DocType) => {
    switch (type) {
      case 'passport':
        return 'Passport';
      case 'emiratesId':
        return 'Emirates ID / Visa';
      case 'drivingLicense':
        return 'Driving License';
      default:
        return '';
    }
  };

  const handleFileSelect = (type: DocType, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setDocuments((docs) =>
        docs.map((doc) =>
          doc.type === type
            ? { ...doc, file, preview: reader.result as string, status: 'uploaded' }
            : doc
        )
      );
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent, type: DocType) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || file.type.startsWith('image/'))) {
      handleFileSelect(type, file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: DocType) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(type, file);
    }
  };

  const handleRemoveDocument = (type: DocType) => {
    setDocuments((docs) =>
      docs.map((doc) =>
        doc.type === type
          ? { ...doc, file: null, preview: null, status: 'pending' }
          : doc
      )
    );
  };

  const calculateProgress = () => {
    const uploadedCount = documents.filter((doc) =>
      doc.status === 'uploaded' || doc.status === 'verified'
    ).length;
    return Math.round((uploadedCount / documents.length) * 100);
  };

  const handleSubmit = async () => {
    // TODO: Call your updateProfile or document upload API here
    // After success:
    onComplete();
  };

  const progress = calculateProgress();
  const allUploaded = documents.every(
    (doc) => doc.status === 'uploaded' || doc.status === 'verified'
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-lg max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 p-2">
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold">Complete Your Profile</h2>
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <span>Profile Completion</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.type} className="bg-gray-50 rounded-lg p-4 border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">{getDocumentLabel(doc.type)}</span>
                  </div>
                  {doc.status === 'uploaded' && (
                    <span className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded">
                      Uploaded
                    </span>
                  )}
                  {doc.status === 'verified' && (
                    <span className="text-sm px-2 py-1 bg-green-100 text-green-600 rounded flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Verified
                    </span>
                  )}
                </div>

                {!doc.preview ? (
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, doc.type)}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400"
                    onClick={() => fileInputRefs[doc.type].current?.click()}
                  >
                    <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <p>Drop your file or click to browse</p>
                    <p className="text-xs text-gray-500">PDF, JPG, PNG allowed</p>
                    <input
                      ref={fileInputRefs[doc.type]}
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={(e) => handleFileInputChange(e, doc.type)}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg border">
                    {doc.file?.type === 'application/pdf' ? (
                      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-lg">
                        <FileText className="w-8 h-8 text-gray-600" />
                      </div>
                    ) : (
                      <img
                        src={doc.preview}
                        alt={getDocumentLabel(doc.type)}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <p className="truncate">{doc.file?.name}</p>
                 <p className="text-xs text-gray-500">
  {doc.file ? `${(doc.file.size / 1024 / 1024).toFixed(2)} MB` : 'No file'}
</p>

                    </div>
                    <button
                      onClick={() => handleRemoveDocument(doc.type)}
                      className="text-red-500 p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-2 bg-gray-200 rounded"
            >
              Skip
            </button>
            <button
              onClick={handleSubmit}
              disabled={!allUploaded}
              className="flex-1 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              {allUploaded ? 'Submit Documents' : 'Upload all files'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
