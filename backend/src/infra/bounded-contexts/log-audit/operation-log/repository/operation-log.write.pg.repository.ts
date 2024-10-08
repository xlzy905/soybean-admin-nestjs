import { Injectable } from '@nestjs/common';

import { PrismaService } from '@lib/shared/prisma/prisma.service';

import { OperationLog } from '@src/lib/bounded-contexts/log-audit/operation-log/domain/operation-log.model';
import { OperationLogWriteRepoPort } from '@src/lib/bounded-contexts/log-audit/operation-log/ports/operation-log.write.repo-port';

@Injectable()
export class OperationLogWriteRepository implements OperationLogWriteRepoPort {
  constructor(private prisma: PrismaService) {}

  async save(operationLog: OperationLog): Promise<void> {
    await this.prisma.sysOperationLog.create({
      data: operationLog,
    });
  }
}
