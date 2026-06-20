export class EntityBulkOperationService {

async verify(ids: string[]) {
return {
affected: ids.length
};
}

async delete(ids: string[]) {
return {
affected: ids.length
};
}
}
