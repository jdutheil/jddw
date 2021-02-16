<?php

namespace App\Controller;

use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\Annotations as Rest;

use FOS\RestBundle\Controller\AbstractFOSRestController;

class InfosController extends AbstractFOSRestController
{
  /**
   * @Rest\Get("/api/version")
   * @View()
   */
  public function getVersion()
  {

    return '0.1';
  }
}
