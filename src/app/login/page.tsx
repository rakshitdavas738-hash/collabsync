import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>
            Login to continue using CollabSync
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-zinc-900 underline">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}