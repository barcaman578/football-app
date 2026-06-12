import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-1 text-xs font-black uppercase tracking-widest" style={{ color: "#888888" }}>Join the game</p>
      <h1 className="mb-8 text-3xl font-black uppercase tracking-tight text-white">Create Account</h1>
      <SignupForm />
    </main>
  );
}
