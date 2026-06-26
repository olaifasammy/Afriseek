import { describe, it, expect, jest } from '@jest/globals';
import { EntityService } from './EntityService';
import { EntityRepository } from '../core/repositories/EntityRepository';
import { AfriseekEntity } from '../types/entity';

describe('EntityService', () => {
  const mockRepository: EntityRepository = {
    findById: jest.fn() as any,
    findBySlug: jest.fn() as any,
    findAll: jest.fn() as any,
    create: jest.fn() as any,
    update: jest.fn() as any,
    delete: jest.fn() as any,
  };

  const service = new EntityService(mockRepository);

  it('should fetch all entities', async () => {
    const mockEntities: AfriseekEntity[] = [{ id: '1', slug: 'test', name: 'Test' } as any];
    (mockRepository.findAll as jest.Mock<() => Promise<AfriseekEntity[]>>).mockResolvedValue(mockEntities);

    const result = await service.getAll();
    expect(result).toEqual(mockEntities);
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
