import { BaseSampleDto } from "./sample.dto";

export class UpdateSampleDto extends BaseSampleDto {
  completedAt: Date;
}