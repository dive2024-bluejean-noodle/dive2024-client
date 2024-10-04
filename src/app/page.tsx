import PushNotificationManager from "@/app/_component/PushNotificationManager";
import InstallPrompt from "@/app/_component/InstallPrompt";

export default function Home() {
  return (
    <main>
      Hello, World!
      <PushNotificationManager />
      <InstallPrompt />
    </main>
  );
}
