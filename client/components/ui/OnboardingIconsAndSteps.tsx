import React from "react";

const STROKE = 2;
const STROKE_COLOR = "#FFFFFF";
const ACCENT = "#FFC527";

function Svg({ children, size = 64, className = "", viewBox = "0 0 64 64", ...rest }: any) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export function UserIcon(props: any) {
  return (
    <Svg {...props}>
      <circle cx="32" cy="22" r="8" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 50c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="22" r="11.5" stroke={ACCENT} strokeWidth="1.5" opacity="0.7" />
    </Svg>
  );
}

export function DocumentCheckIcon(props: any) {
  return (
    <Svg {...props}>
      <path d="M20 12h18l6 6v34a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4z" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M38 12v10h10" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M24 28h16M24 36h16M24 44h10" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M26 44l3 3 7-7" stroke={ACCENT} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ShieldIcon(props: any) {
  return (
    <Svg {...props}>
      <path d="M32 8l16 6v12c0 12.15-7.4 23.13-16 26-8.6-2.87-16-13.85-16-26V14l16-6z" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M24 32l6 6 10-10" stroke={ACCENT} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function BankIcon(props: any) {
  return (
    <Svg {...props}>
      <path d="M12 24l20-10 20 10" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinejoin="round" />
      <rect x="16" y="24" width="32" height="20" rx="2" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <path d="M16 48h32" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M10 54h44" stroke={ACCENT} strokeWidth={STROKE} strokeLinecap="round" />
    </Svg>
  );
}

export function ChartIcon(props: any) {
  return (
    <Svg {...props}>
      <rect x="12" y="14" width="40" height="30" rx="4" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <path d="M18 38l8-10 6 6 10-14" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="42" cy="20" r="3" fill={ACCENT} />
    </Svg>
  );
}

export function HandshakeIcon(props: any) {
  return (
    <Svg {...props}>
      <path d="M24 30l8 8 6-6M40 24l6 6" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 24l10 10M44 24c4 0 8 4 8 8v2" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M28 32l4 4" stroke={ACCENT} strokeWidth={STROKE} strokeLinecap="round" />
    </Svg>
  );
}

export function FileShieldIcon(props: any) {
  return (
    <Svg {...props}>
      <path d="M22 10h16l6 6v30a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M38 10v10h10" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinejoin="round" />
      <path d="M32 24l10 4v6c0 6-4 11-10 12-6-1-10-6-10-12v-6l10-4z" stroke={ACCENT} strokeWidth={STROKE} strokeLinejoin="round" />
    </Svg>
  );
}

export function UsersIcon(props: any) {
  return (
    <Svg {...props}>
      <circle cx="26" cy="24" r="6" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <circle cx="42" cy="22" r="5" stroke={STROKE_COLOR} strokeWidth={STROKE} opacity="0.8" />
      <path d="M14 46c0-6.6 5.4-12 12-12s12 5.4 12 12" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" />
      <path d="M38 46c0-4.4 3.6-8 8-8" stroke={STROKE_COLOR} strokeWidth={STROKE} strokeLinecap="round" opacity="0.8" />
      <circle cx="46" cy="18" r="2.5" fill={ACCENT} />
    </Svg>
  );
}

export function DashboardIcon(props: any) {
  return (
    <Svg {...props}>
      <rect x="10" y="12" width="44" height="40" rx="4" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <rect x="14" y="16" width="18" height="10" rx="2" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <rect x="34" y="16" width="16" height="22" rx="2" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <rect x="14" y="28" width="18" height="14" rx="2" stroke={STROKE_COLOR} strokeWidth={STROKE} />
      <path d="M36 36h12" stroke={ACCENT} strokeWidth={STROKE} strokeLinecap="round" />
    </Svg>
  );
}

export const clientSteps = [
  {
    title: "SIGN UP",
    body: ["Create your account using mobile number and email for secure access."],
    cta: "Sign Up Now",
    icon: <UserIcon size={72} />,
    iconComponent: UserIcon,
  },
  {
    title: "KYC VERIFICATION",
    body: ["Upload PAN, Aadhaar, and bank details for instant digital verification."],
    cta: "Complete KYC",
    icon: <DocumentCheckIcon size={72} />,
    iconComponent: DocumentCheckIcon,
  },
  {
    title: "RISK PROFILING",
    body: ["Answer a few questions to get personalized investment recommendations."],
    cta: "Take Quiz",
    icon: <ShieldIcon size={72} />,
    iconComponent: ShieldIcon,
  },
  {
    title: "ADD BANK ACCOUNT",
    body: ["Link your bank securely for investments and withdrawals."],
    cta: "Link Account",
    icon: <BankIcon size={72} />,
    iconComponent: BankIcon,
  },
  {
    title: "START INVESTING",
    body: ["Choose from mutual funds, SIPs, and other products to begin your journey."],
    cta: "Explore Investments",
    icon: <ChartIcon size={72} />,
    iconComponent: ChartIcon,
  },
];

export const partnerSteps = [
  {
    title: "REGISTER AS PARTNER",
    body: ["Fill in your basic details to register as a distributor/advisor on the platform."],
    cta: "Register Now",
    icon: <HandshakeIcon size={72} />,
    iconComponent: HandshakeIcon,
  },
  {
    title: "COMPLETE COMPLIANCES",
    body: ["Submit ARN, SEBI registration, and KYC documents for approval."],
    cta: "Submit Documents",
    icon: <FileShieldIcon size={72} />,
    iconComponent: FileShieldIcon,
  },
  {
    title: "SET UP BANKING DETAILS",
    body: ["Add your bank account for payouts, earnings, and commissions."],
    cta: "Add Bank Details",
    icon: <BankIcon size={72} />,
    iconComponent: BankIcon,
  },
  {
    title: "CLIENT ONBOARDING",
    body: ["Invite clients, assist them with KYC, and track their progress."],
    cta: "Onboard Clients",
    icon: <UsersIcon size={72} />,
    iconComponent: UsersIcon,
  },
  {
    title: "ACCESS PARTNER DASHBOARD",
    body: ["Manage clients, track commissions, and monitor business growth."],
    cta: "Go to Dashboard",
    icon: <DashboardIcon size={72} />,
    iconComponent: DashboardIcon,
  },
];

export default {};
