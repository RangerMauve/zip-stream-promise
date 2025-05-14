declare module "zip-stream-promise" {
  import { FileDataInput } from "zip-stream";
  import { Stream as NodeStream } from "node:stream";
  import { Stream, TransformOptions } from "readable-stream";
  import { ZipArchiveEntry} from "compress-commons";

  export default class ZipStreamPromise extends NodeStream {
    entry(
      source?: Buffer | Stream | NodeStream | string | null,
      data?: FileDataInput
    ) : Promise<ZipArchiveEntry>

    finalize() : void
  }

}
