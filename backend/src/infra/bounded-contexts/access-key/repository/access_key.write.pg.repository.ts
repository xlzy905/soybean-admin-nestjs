import { Injectable } from '@nestjs/common';

import { AccessKey } from '@src/lib/bounded-contexts/access-key/domain/access_key.model';
import { AccessKeyWriteRepoPort } from '@src/lib/bounded-contexts/access-key/ports/access_key.write.repo-port';
import { PrismaService } from '@src/shared/prisma/prisma.service';

@Injectable()
export class AccessKeyWritePostgresRepository
  implements AccessKeyWriteRepoPort
{
  constructor(private prisma: PrismaService) {}

  async deleteById(id: string): Promise<void> {
    await this.prisma.sysAccessKey.delete({
      where: { id },
    });
  }

  async save(accessKey: AccessKey): Promise<void> {
    await this.prisma.sysAccessKey.create({
      data: { ...accessKey },
    });
  }
}