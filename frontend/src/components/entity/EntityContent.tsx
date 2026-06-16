import { useState } from "react";

import EntityTabs from "./EntityTabs";
import EntityOverview from "./EntityOverview";
import EntityTraits from "./EntityTraits";
import EntityFacts from "./EntityFacts";
import EntityTimeline from "./EntityTimeline";
import EntitySources from "./EntitySources";
import EntityRelated from "./EntityRelated";
import EntityLibrarian from "./EntityLibrarian";

interface Props {
  entity: any;
}

export default function EntityContent({
  entity
}: Props) {
  const [activeTab, setActiveTab] =
    useState("Overview");

  return (
    <>
      <section
        style={{
          background:"#fff",
           border:"1px solid #e5e7eb",
           borderRadius:"8px",
           padding:"2rem",
            marginTop:"2rem",
            boxShadow:"0 4px 14px rgba(0,0,0,.04)"
        }}
      >
        <EntityTabs
          active={activeTab}
          onChange={setActiveTab}
        />

        {activeTab === "Overview" && (
          <>
            <EntityOverview
              summary={entity.summary}
            />

            <EntityLibrarian
              entity={entity}
            />
          </>
        )}

        {activeTab === "Traits" && (
          <EntityTraits
            traits={entity.traits || []}
          />
        )}

        {activeTab === "Facts" && (
          <EntityFacts
            facts={entity.facts || []}
          />
        )}

        {activeTab === "Timeline" && (
          <EntityTimeline
            timeline={entity.timeline || []}
          />
        )}
      </section>

      <EntitySources
        sources={entity.sources || []}
      />

      <EntityRelated
        relationships={
          entity.relationships || []
        }
      />
    </>
  );
}
