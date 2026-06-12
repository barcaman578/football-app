import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-3)" }}>
        Join the game
      </p>
      <h1
        className="mb-8 font-extrabold"
        style={{ fontSize: "32px", letterSpacing: "-0.025em", color: "var(--text)" }}
      >
        Create account
      </h1>
      <SignupForm />
    </main>
  );
}
