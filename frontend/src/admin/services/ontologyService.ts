import apiClient from './apiClient';

export const OntologyService = {
  create: (data: any) => apiClient.post('/ontology', data),
  update: (id: string, data: any) => apiClient.put(`/ontology/${id}`, data),
  approve: (id: string) => apiClient.patch(`/ontology/${id}/approve`),
  updateStatus: (id: string, active: boolean) => apiClient.patch(`/ontology/${id}/status`, { active }),
  list: () => apiClient.get('/ontology'),
};
