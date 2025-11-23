"use client";

import { useEffect, useRef } from "react";
import Image from 'next/image'
import Link from "next/link";
const REDIRECT_DELAY_MS = 10_000;

// ⬇️ Change this to the actual Dehli 6 URL
const DEHLI6_URL = "https://www.delhi6.co.nz/";

export default function PaihiaIndianRedirectionPage() {
  const hasRedirectedRef = useRef(false);

  const redirectToDehli6 = () => {
    if (hasRedirectedRef.current) return;
    hasRedirectedRef.current = true;

    // If Dehli 6 is on another domain, this is safest:
    window.location.href = DEHLI6_URL;

    // If it's another route in the same Next app, you could instead:
    // router.push("/dehli-6");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      redirectToDehli6();
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
        backgroundColor: "#f9fafb",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        textAlign: "center",
        overflow: "hidden", 
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 18px 45px rgba(15, 23, 42, 0.15)",
            width: "100%", 
            overflow: "hidden", 
            border: "1px solid rgba(0,0,0,0.1)"
        }}
      >
        <Link href={DEHLI6_URL} style={{      paddingBottom: "100%", 
          width: "100%", 
                    position: "relative", 
                    display: "block"
          }}>
        <Image src="/coming-soon.png" fill  alt="coming-soon-image"/> 

        </Link >
        {/* <h1
          style={{
            fontSize: "1.8rem",
            marginBottom: "0.75rem",
            color: "#111827",
          }}
        >
          We are closed
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "1.5rem",
            color: "#4b5563",
          }}
        >
          To continue to enjoy Indian cuisine in Paihia, see the team at{" "}
          <strong>Dehli 6</strong>.
        </p>

        <button
          type="button"
          onClick={redirectToDehli6}
          style={{
            display: "inline-block",
            padding: "0.8rem 1.8rem",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: 600,
            background:
              "linear-gradient(135deg, #b91c1c 0%, #ef4444 45%, #f97316 100%)",
            color: "#ffffff",
            boxShadow: "0 10px 25px rgba(185, 28, 28, 0.4)",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
          }}
  
        >
          Dehli 6 website
        </button>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            color: "#9ca3af",
          }}
        >
          You’ll be redirected automatically in 10 seconds.
        </p> */}
      </div>
    </main>
  );
}
