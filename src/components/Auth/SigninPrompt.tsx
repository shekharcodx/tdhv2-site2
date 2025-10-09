import { X, Shield, CheckCircle, Clock } from 'lucide-react';

interface SignInPromptProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: () => void;
  onRegister: () => void;
}

export default function SignInPrompt({
  isOpen,
  onClose,
  onSignIn,
  onRegister
}: SignInPromptProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg">
        <button onClick={onClose} className="absolute top-4 right-4 p-2">
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Sign In to Continue</h2>
          <p className="text-gray-600 mb-8">Please sign in or register to proceed</p>

          <div className="space-y-4">
            <button
              onClick={onRegister}
              className="w-full py-2 bg-blue-600 text-white rounded"
            >
              Create Account
            </button>
            <button
              onClick={onSignIn}
              className="w-full py-2 border border-gray-300 rounded"
            >
              Sign In
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-6">
            By continuing, you agree to our Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
}
