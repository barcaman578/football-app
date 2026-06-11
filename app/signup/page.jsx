import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white">
        Create Account
      </h1>
      <SignupForm />
    </main>
  );
}
