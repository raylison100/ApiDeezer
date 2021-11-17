'use strict';

/**
 * HomeController
 */
class HomeController{
  /**
   *
   * @param request
   * @param response
   * @returns {Promise<*>}
   */
    async unauthorized({request, response}){
      return response.unauthorized({message: 'unauthorized'});
    }

    async checkInfra({ request, response }) {
      return response.status(200).send({error:false, message:'Success!'});
    }
}

module.exports = HomeController;
