export class EntityTimelineLinkService {

async getLinks(entityId: string) {
return {
entityId,
timelineIds: []
};
}

async addLink(
entityId: string,
timelineId: string
) {
return {
entityId,
timelineId
};
}

async removeLink(
entityId: string,
timelineId: string
) {
return {
entityId,
timelineId
};
}
}
