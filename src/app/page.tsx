import { redirect } from "next/navigation";
import { cookies } from 'next/headers'
import { createSupabaseServerClient} from '@lib/supabaseServer'
import error from "next/error";

export default async function Home() {
  const supabase = await createSupabaseServerClient();

  const {
    data: {user},
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const {data: profiles, error} = await supabase.from("profiles").select();

  if (error) {
    console.error("Database error:", error);
    return <p>Error loading profile</p>
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <h2>All Profiles:</h2>
      <ul>
        {profiles?.map((profile: any) => (
          <li key={profile.id}>{profile.username}</li>
        ))}
      </ul>
    </div>
  );
}