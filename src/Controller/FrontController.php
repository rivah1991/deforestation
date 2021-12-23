<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontController extends AbstractController
{
    // /**
    //  * @Route("/", name="home")
    //  */
    // public function index(): Response
    // {
    //     return $this->render('front/index.html.twig', []);
    // }

    /**
     * @Route("/{reactRouting}", name="accueil", defaults={"reactRouting": null})
     */
    public function accueil()
    {
        return $this->render('default/rivah.html.twig');
    }
}
