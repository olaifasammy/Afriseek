import { describe, it, expect, vi } from 'vitest';
import { EntityService } from './EntityService';
import { EntityRepository } from '../core/repositories/EntityRepository';
import { AfriseekEntity } from '../types/entity';

describe('EntityService', () => {
  const mockRepository: EntityRepository = {
    findById: vi.fn(),
    findBySlug: vi.fn(),
    findAll: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    delete: vi.fn(),
  };

  const service = new EntityService(mockRepository);

  it('should fetch all entities', async () => {
    const mockEntities: AfriseekEntity[] = [{ id: '1', slug: 'test', name: 'Test' } as any];
    vi.mocked(mockRepository.findAll).mockResolvedValue(mockEntities);

    const result = await service.getAll();
    expect(result).toEqual(mockEntities);
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
