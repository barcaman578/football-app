import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-1 flex-col justify-center px-6 py-16">
      <p className="mb-1 text-xs font-black uppercase tracking-widest" style={{ color: "#888888" }}>Welcome back</p>
      <h1 className="mb-8 text-3xl font-black uppercase tracking-tight text-white">Log In</h1>
      <LoginForm />
    </main>
  );
}
