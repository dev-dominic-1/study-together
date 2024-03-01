/**
 * Default response handler for API
 * @param context Reference to `this` from parent component
 * @param {Promise<*>} promise Promise from fetch
 */
export const defaultResponseHandler = async (context, promise) => {
  let r = await promise
  return ApiResponseHandler.from(context, r)
}

export default class ApiResponseHandler {

  statusCode
  body

  constructor (statusCode, body) {
    this.statusCode = statusCode
    this.body = body
  }

  /**
   *
   * @param {VueComponent} context
   * @param response
   * @returns {Promise<ApiResponseHandler>}
   */
  static async from (context, response) {
    const {ok: success} = response
    let bodyPromise = await (success ? response.json() : response.text())
    if (!success) context.$store.commit('setApiErrors', [bodyPromise])
    return new ApiResponseHandler(response.status, bodyPromise)
  }

}