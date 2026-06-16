export default function Footer() {
  return (
    <footer
      style={{
        background:"#ECEFF3",
        borderTop:"2px solid var(--afri-gold)",
        marginTop:"4rem"
      }}
    >
      <div
        style={{
          maxWidth:"1200px",
          margin:"0 auto",
          padding:"3rem 1rem",
          display:"grid",
          gap:"1.5rem"
        }}
      >
        {/* Brand */}

        <div
          style={{
            borderLeft:"4px solid var(--afri-gold)",
            paddingLeft:"1rem"
          }}
        >
          <h2
            style={{
              margin:"0 0 .75rem",
              color:"var(--afri-gold)"
            }}
          >
            AFRISEEK
          </h2>

          <p
            style={{
              margin:0,
              lineHeight:1.7,
              color:"var(--afri-text-muted)",
              maxWidth:"700px"
            }}
          >
            Africa's Living Knowledge Graph.
            Discovering, preserving and connecting
            African history, cultures, kingdoms,
            languages, people and heritage through
            structured knowledge.
          </p>
        </div>

        {/* About */}

        <div
          style={{
            borderLeft:"4px solid var(--afri-gold)",
            paddingLeft:"1rem"
          }}
        >
          <h4
            style={{
              margin:"0 0 .75rem",
              color:"var(--afri-text)"
            }}
          >
            About Afriseek
          </h4>

          <div style={{display:"grid", gap:".5rem"}}>
            <span>About Us</span>
            <span>Contribute Knowledge</span>
            <span>Editorial Standards</span>
            <span>Contact Us</span>
          </div>
        </div>

        {/* Legal */}

        <div
          style={{
            borderLeft:"4px solid var(--afri-gold)",
            paddingLeft:"1rem"
          }}
        >
          <h4
            style={{
              margin:"0 0 .75rem",
              color:"var(--afri-text)"
            }}
          >
            Legal & Transparency
          </h4>

          <div style={{display:"grid", gap:".5rem"}}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Cookie Policy</span>
            <span>Data Sources</span>
          </div>
        </div>

        {/* Social */}

        <div
          style={{
            borderLeft:"4px solid var(--afri-gold)",
            paddingLeft:"1rem"
          }}
        >
          <h4
            style={{
              margin:"0 0 .75rem",
              color:"var(--afri-text)"
            }}
          >
            Follow Afriseek
          </h4>

          <div
            style={{
              display:"flex",
              gap:"1rem",
              flexWrap:"wrap",
              alignItems:"center"
            }}
          >

            {/* Facebook */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--afri-gold)">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.438H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.49 0-1.956.925-1.956 1.874v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z"/>
            </svg>

            {/* X */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--afri-gold)">
              <path d="M18.244 2H21.5l-7.11 8.126L22 22h-5.95l-4.66-6.09L6.06 22H2.8l7.6-8.69L2 2h6.1l4.21 5.56L18.244 2z"/>
            </svg>

            {/* Instagram */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--afri-gold)">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm5 4a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm5.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
            </svg>

            {/* WhatsApp */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--afri-gold)">
              <path d="M20.52 3.48A11.82 11.82 0 0012.04 0C5.49 0 .16 5.33.16 11.88c0 2.09.54 4.14 1.57 5.95L0 24l6.33-1.66a11.82 11.82 0 005.71 1.46h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.24-6.15-3.41-8.44z"/>
            </svg>

            {/* YouTube */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--afri-gold)">
              <path d="M23.5 6.2a3 3 0 00-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8 3 3 0 002.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 002.1-2.12A31.2 31.2 0 0024 12a31.2 31.2 0 00-.5-5.8zM9.75 15.5v-7L16 12l-6.25 3.5z"/>
            </svg>

            {/* TikTok */}
            <svg width="30" height="30" viewBox="0 0 24 24" fill="var(--afri-gold)">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-1.8V16a5 5 0 11-5-5h.42v2.47h-.42A2.53 2.53 0 1013.35 16V0h2.47a4.83 4.83 0 003.77 4.22v2.47z"/>
            </svg>

          </div>
        </div>

        <div
          style={{
            borderTop:"1px solid #d7dce3",
            paddingTop:"1rem",
            textAlign:"center",
            color:"var(--afri-text-muted)",
            fontSize:".9rem"
          }}
        >
          © 2026 Afriseek. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
