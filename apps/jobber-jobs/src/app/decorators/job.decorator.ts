import { applyDecorators, Injectable, SetMetadata } from "@nestjs/common";
import { JobMetadata } from "../interfaces/job-metadata.interface";

export const JOB_METADATE_KEY = 'job_meta'

export const Job = (meta: JobMetadata) =>
    applyDecorators(
        SetMetadata(JOB_METADATE_KEY, meta),
        Injectable()
    )