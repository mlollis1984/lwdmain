<?php

namespace App\Controller;

use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="app_homepage")
     */
    public function homepage(LoggerInterface $logger)
    {
        $logger->info('Page loaded');
        return $this->render('FrontEnd/homepage.html.twig', [

        ]);
    }
}
