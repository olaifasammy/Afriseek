import { useState } from "react";

import {
  SlidersHorizontal,
  Globe,
  Calendar,
  Shapes,
  BookOpen,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function SearchFilters() {

  const [open,setOpen] = useState(false);

  return (
    <section
      style={{
        padding:"0 1rem 1rem"
      }}
    >
      <div
        style={{
          maxWidth:"900px",
          margin:"0 auto"
        }}
      >
        <button
          onClick={()=>setOpen(!open)}
          style={{
            display:"flex",
            alignItems:"center",
            gap:"0.75rem",
            background:"var(--afri-surface)",
            border:"1px solid var(--afri-border)",
            borderRadius:"14px",
            padding:"0.85rem 1rem",
            cursor:"pointer"
          }}
        >
          <SlidersHorizontal
            size={18}
            color="var(--afri-gold)"
          />

          <span
            style={{
              fontWeight:600
            }}
          >
            Filters
          </span>

          {open
            ? <ChevronUp size={16}/>
            : <ChevronDown size={16}/>
          }
        </button>

        {open && (
          <div
            style={{
              marginTop:"1rem",
              background:"var(--afri-surface)",
              border:"1px solid var(--afri-border)",
              borderRadius:"18px",
              padding:"1rem",
              display:"grid",
              gap:"1rem"
            }}
          >

            <label>
              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"0.5rem",
                  marginBottom:"0.5rem",
                  fontWeight:600
                }}
              >
                <Globe
                  size={16}
                  color="var(--afri-gold)"
                />
                Country
              </div>

              <select
                style={{
                  width:"100%",
                  padding:"0.85rem",
                  borderRadius:"12px",
                  border:"1px solid var(--afri-border)"
                }}
              >
                <option>All Countries</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>Ethiopia</option>
              </select>
            </label>

            <label>
              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"0.5rem",
                  marginBottom:"0.5rem",
                  fontWeight:600
                }}
              >
                <Calendar
                  size={16}
                  color="var(--afri-gold)"
                />
                Historical Period
              </div>

              <select
                style={{
                  width:"100%",
                  padding:"0.85rem",
                  borderRadius:"12px",
                  border:"1px solid var(--afri-border)"
                }}
              >
                <option>All Periods</option>
                <option>Ancient Africa</option>
                <option>Medieval Africa</option>
                <option>Colonial Era</option>
                <option>Modern Africa</option>
              </select>
            </label>

            <label>
              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"0.5rem",
                  marginBottom:"0.5rem",
                  fontWeight:600
                }}
              >
                <Shapes
                  size={16}
                  color="var(--afri-gold)"
                />
                Entity Type
              </div>

              <select
                style={{
                  width:"100%",
                  padding:"0.85rem",
                  borderRadius:"12px",
                  border:"1px solid var(--afri-border)"
                }}
              >
                <option>All Entities</option>
                <option>People</option>
                <option>Kingdoms</option>
                <option>Languages</option>
                <option>Religions</option>
                <option>Cultures</option>
              </select>
            </label>

            <label>
              <div
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"0.5rem",
                  marginBottom:"0.5rem",
                  fontWeight:600
                }}
              >
                <BookOpen
                  size={16}
                  color="var(--afri-gold)"
                />
                Content Type
              </div>

              <select
                style={{
                  width:"100%",
                  padding:"0.85rem",
                  borderRadius:"12px",
                  border:"1px solid var(--afri-border)"
                }}
              >
                <option>Everything</option>
                <option>Knowledge Entries</option>
                <option>Articles</option>
                <option>Timelines</option>
                <option>Knowledge Paths</option>
              </select>
            </label>

          </div>
        )}
      </div>
    </section>
  );
}
