import { createClient } from "@/lib/supabase/server";
import BottomNavLinks from "./BottomNavLinks";

export default async function BottomNav() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  return <BottomNavLinks />;
}
