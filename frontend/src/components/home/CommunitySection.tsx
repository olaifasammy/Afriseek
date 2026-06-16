import {
  Users,
  Mail,
  ArrowRight
} from "lucide-react";

export default function CommunitySection() {
  return (
    <section
      style={{
        background:"#0b1220",
        color:"white",
        padding:"3rem 1rem"
      }}
    >
      <div
        style={{
          maxWidth:"700px",
          margin:"0 auto",
          textAlign:"center"
        }}
      >
        <div
          style={{
            display:"flex",
            justifyContent:"center",
            marginBottom:"1rem"
          }}
        >
          <Users
            size={42}
            color="#d4a54a"
          />
        </div>

        <h2
          style={{
            marginTop:0,
            fontSize:"2rem"
          }}
        >
          Join the Afriseek Community
        </h2>

        <p
          style={{
            color:"#cbd5e1",
            lineHeight:1.7,
            marginBottom:"2rem"
          }}
        >
          Connect with researchers,
          students, historians,
          linguists and curious minds
          exploring Africa's knowledge.
        </p>

        <div
          style={{
            display:"flex",
            background:"#fff",
            borderRadius:"14px",
            overflow:"hidden"
          }}
        >
          <input
            placeholder="Enter your email"
            style={{
              flex:1,
              border:"none",
              padding:"1rem",
              outline:"none"
            }}
          />

          <button
            style={{
              border:"none",
              background:"#d4a54a",
              color:"#000",
              padding:"0 1.2rem",
              fontWeight:700
            }}
          >
            <Mail size={20}/>
          </button>
        </div>

        <button
          style={{
            marginTop:"1rem",
            background:"transparent",
            border:"1px solid #d4a54a",
            color:"#d4a54a",
            padding:"0.9rem 1.2rem",
            borderRadius:"12px",
            display:"inline-flex",
            alignItems:"center",
            gap:"0.5rem"
          }}
        >
          Join Community
          <ArrowRight size={18}/>
        </button>
      </div>
    </section>
  );
}
