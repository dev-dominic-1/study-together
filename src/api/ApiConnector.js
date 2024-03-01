import ApiQueryParameters from "@/api/ApiQueryParameters";
import {defaultResponseHandler} from './ApiResponseHandler'
export default class ApiConnector {

  #context
  #url = 'http://localhost:5150/'
  #baseEndpoint
  #endpoint
  #queryParameters
  #options = {mode: 'cors'}

  /**
   * Initialize an ApiConnector with a given endpoint, additional path for url
   * and optionally an `ApiQueryParameters` object (can be defined later)
   * @param context Context provided by a VueComponent for error handling
   * @param {String} endpoint Endpoint of corresponding API controller
   * @param {Array<String>} adtlUrl Additional route information
   * @param queryParameters
   */
  constructor (context, endpoint, adtlUrl = [], queryParameters = new ApiQueryParameters()) {
    this.#context = context
    this.#baseEndpoint = endpoint
    this.#endpoint = ['api', endpoint, ...adtlUrl].join('/')
    this.#queryParameters = queryParameters
  }

  getQueryParameters () {
    return this.#queryParameters
  }

  setQueryParameters (parameters = {}) {
    if (parameters instanceof ApiQueryParameters) this.#queryParameters = parameters
    else this.#queryParameters = new ApiQueryParameters(parameters)
    return this
  }

  withAdditionalUrl (...adtlUrl) {
    this.#endpoint = ['api', this.#baseEndpoint, ...adtlUrl].join('/')
    return this
  }

  #getQueryResource = () => {
    return `${this.#url}${this.#endpoint}${this.#queryParameters?.toQueryString() ?? ''}`
  }
  async get () {
    return await defaultResponseHandler(this.#context, fetch(this.#getQueryResource(), {...this.#options, method: 'GET'}))
  }

  async save () {
    defaultResponseHandler(fetch())
  }
}