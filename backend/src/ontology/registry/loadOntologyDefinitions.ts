import { OntologyDefinition } from "../../types/ontology/OntologyDefinition";

import { economicEntityOntology } from "../base/economicEntity";
import { ecosystemOntology } from "../base/ecosystem";
import { geographicFeatureOntology } from "../base/geographicFeature";
import { historicalEntityOntology } from "../base/historicalEntity";
import { infrastructureAssetOntology } from "../base/infrastructureAsset";
import { institutionOntology } from "../base/institution";
import { languageFamilyOntology } from "../base/languageFamily";
import { peopleGroupOntology } from "../base/peopleGroup";
import { polityOntology } from "../base/polity";
import { religiousSystemOntology } from "../base/religiousSystem";
import { settlementOntology } from "../base/settlement";
import { administrativeUnitOntology } from "../core/administrative_unit";
import { beliefSystemOntology } from "../core/belief_system";
import { biodiversityEntityOntology } from "../core/biodiversityEntity";
import { culturalEntityOntology } from "../core/cultural_entity";
import { entityOntology } from "../core/entity";
import { eventOntology } from "../core/event";
import { infrastructureOntology } from "../core/infrastructure";
import { infrastructureEntityOntology } from "../core/infrastructureEntity";
import { personOntology } from "../core/person";
import { religiousEntityOntology } from "../core/religiousEntity";
import { socialGroupOntology } from "../core/social_group";
import { technologyEntityOntology } from "../core/technologyEntity";
import { cityOntology } from "../geography/city";
import { continentOntology } from "../geography/continent";
import { riverOntology } from "../geography/hydrology/river";
import { landformOntology } from "../geography/landform";
import { caveSystemOntology } from "../geography/landforms/caveSystem";
import { desertOntology } from "../geography/landforms/desert";
import { mountainOntology } from "../geography/landforms/mountain";
import { plateauOntology } from "../geography/landforms/plateau";
import { valleyOntology } from "../geography/landforms/valley";
import { volcanoOntology } from "../geography/landforms/volcano";
import { naturalFeatureOntology } from "../geography/natural/naturalFeature";
import { placeOntology } from "../geography/place/place";
import { countryOntology } from "../geography/political/country";
import { districtOntology } from "../geography/political/district";
import { municipalityOntology } from "../geography/political/municipality";
import { provinceOntology } from "../geography/political/province";
import { subRegionOntology } from "../geography/political/subRegion";
import { protectedAreaOntology } from "../geography/protectedArea";
import { regionOntology } from "../geography/region";
import { capitalCityOntology } from "../geography/settlements/capitalCity";
import { historicSettlementOntology } from "../geography/settlements/historicSettlement";
import { humanSettlementOntology } from "../geography/settlements/humanSettlement";
import { megacityOntology } from "../geography/settlements/megacity";
import { metropolisOntology } from "../geography/settlements/metropolis";
import { portCityOntology } from "../geography/settlements/portCity";
import { townOntology } from "../geography/settlements/town";
import { villageOntology } from "../geography/settlements/village";
import { deltaOntology } from "../geography/waterBodies/delta";
import { estuaryOntology } from "../geography/waterBodies/estuary";
import { lagoonOntology } from "../geography/waterBodies/lagoon";
import { lakeOntology } from "../geography/waterBodies/lake";
import { wetlandOntology } from "../geography/waterBodies/wetland";
import { waterBodyOntology } from "../geography/waterBody";
import { chiefdomOntology } from "../governance/chiefdom";
import { cityStateOntology } from "../governance/cityState";
import { empireOntology } from "../governance/empire";
import { federalSystemOntology } from "../governance/federalSystem";
import { governingSystemOntology } from "../governance/governingSystem";
import { kingdomOntology } from "../governance/kingdom";
import { monarchyOntology } from "../governance/monarchy";
import { republicOntology } from "../governance/republic";
import { republicSystemOntology } from "../governance/republicSystem";
import { sultanateOntology } from "../governance/sultanate";
import { traditionalInstitutionOntology } from "../governance/traditionalInstitution";
import { historicalEventOntology } from "../history/historicalEvent";
import { universityOntology } from "../institutions/university";
import { languageOntology } from "../language/language";
import { clanOntology } from "../people/clan";
import { diasporaCommunityOntology } from "../people/diasporaCommunity";
import { dynastyOntology } from "../people/dynasty";
import { ethnicGroupOntology } from "../people/ethnicGroup";
import { religionOntology } from "../religion/religion";

export function loadOntologyDefinitions(): OntologyDefinition[] {
  return [
    economicEntityOntology,
    ecosystemOntology,
    geographicFeatureOntology,
    historicalEntityOntology,
    infrastructureAssetOntology,
    institutionOntology,
    languageFamilyOntology,
    peopleGroupOntology,
    polityOntology,
    religiousSystemOntology,
    settlementOntology,
    administrativeUnitOntology,
    beliefSystemOntology,
    biodiversityEntityOntology,
    culturalEntityOntology,
    entityOntology,
    eventOntology,
    infrastructureOntology,
    infrastructureEntityOntology,
    personOntology,
    religiousEntityOntology,
    socialGroupOntology,
    technologyEntityOntology,
    cityOntology,
    continentOntology,
    riverOntology,
    landformOntology,
    caveSystemOntology,
    desertOntology,
    mountainOntology,
    plateauOntology,
    valleyOntology,
    volcanoOntology,
    naturalFeatureOntology,
    placeOntology,
    countryOntology,
    districtOntology,
    municipalityOntology,
    provinceOntology,
    subRegionOntology,
    protectedAreaOntology,
    regionOntology,
    capitalCityOntology,
    historicSettlementOntology,
    humanSettlementOntology,
    megacityOntology,
    metropolisOntology,
    portCityOntology,
    townOntology,
    villageOntology,
    deltaOntology,
    estuaryOntology,
    lagoonOntology,
    lakeOntology,
    wetlandOntology,
    waterBodyOntology,
    chiefdomOntology,
    cityStateOntology,
    empireOntology,
    federalSystemOntology,
    governingSystemOntology,
    kingdomOntology,
    monarchyOntology,
    republicOntology,
    republicSystemOntology,
    sultanateOntology,
    traditionalInstitutionOntology,
    historicalEventOntology,
    universityOntology,
    languageOntology,
    clanOntology,
    diasporaCommunityOntology,
    dynastyOntology,
    ethnicGroupOntology,
    religionOntology,
  ];
}
