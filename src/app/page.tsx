import styles from './page.module.css';
import PreOnboardingForm from './PreOnboardingForm';
import Image from 'next/image';

export const metadata = {
  title: 'Client Pre-Onboarding | Stacli',
  description: 'Stacli client pre-onboarding form',
};

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <main className={styles.card}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="Stacli Logo"
            width={50}
            height={50}
            className={styles.logoImage}
            priority
          />
          <h1 className={styles.logoText}>Stacli</h1>
        </div>

        <h2 className={styles.cardTitle}>Client Pre Onboarding</h2>
        <p className={styles.cardSubtitle}>
          Welcome! Please fill out the form below to get started.
        </p>

        <PreOnboardingForm />
      </main>
    </div>
  );
}
