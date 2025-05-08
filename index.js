import ZipStream from 'zip-stream'

/**
 * @import {ArchiveEntry} from "archive-commons"
 */

export default class ZipStreamPromise extends ZipStream {
  /**
   * Appends an entry given an input source (text string, buffer, or stream).
   *
   * @param  {(Buffer|Stream|String)} source The input source.
   * @param  {Object} data
   * @param  {String} data.name Sets the entry name including internal path.
   * @param  {String} [data.comment] Sets the entry comment.
   * @param  {(String|Date)} [data.date=NOW()] Sets the entry date.
   * @param  {Number} [data.mode=D:0755/F:0644] Sets the entry permissions.
   * @param  {Boolean} [data.store=options.store] Sets the compression method to STORE.
   * @param  {String} [data.type=file] Sets the entry type. Defaults to `directory`
   * if name ends with trailing slash.
   * @return {Promise<ArchiveEntry>}
   */
  entry (source, data) {
    return new Promise((resolve, reject) => {
      super.entry(source, data, (err, entry) => {
        if (err) reject(err)
        else resolve(entry)
      })
    })
  }
}
