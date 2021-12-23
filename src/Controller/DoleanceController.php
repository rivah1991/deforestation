<?php

namespace App\Controller;

use App\Entity\Doleance;
use App\Form\DoleanceType;
use App\Repository\DoleanceRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

class DoleanceController extends AbstractController
{
    // /**
    //  * @Route("/doleance", name="doleance")
    //  */
    // public function list_doleance(DoleanceRepository $doleanceRepository, ManagerRegistry $managerRegistry, Request $request, PaginatorInterface $paginator): Response
    // {
    //     $message = null;
    //     $doleance = new Doleance();
    //     $form = $this->createForm(DoleanceType::class, $doleance);
    //     $em = $managerRegistry->getManager();
    //     $form->handleRequest($request);
    //     if ($form->isSubmitted() && $form->isValid()) {

    //         $em->persist($doleance);
    //         $em->flush();
    //         unset($doleance);
    //         unset($form);
    //         $doleance = new Doleance();
    //         $form = $this->createForm(DoleanceType::class, $doleance);
    //         $message = "Votre doléance a été bien envoyée";
    //     }

    //     $data = $doleanceRepository->myFindAll();

    //     $doleances = $paginator->paginate(
    //         $data,
    //         $request->query->getInt('page', 1),
    //         5
    //     );


    //     return $this->render('doleance/index.html.twig', [
    //         'doleances' => $doleances, 'form' => $form->createView(), 'message' => $message
    //     ]);
    // }

    /**
     * @Route("api/doleonce", name="api_user", methods={"POST", "GET"})
     * @return JsonResponse
     * @throws Exception
     */
    public function register(Request $request,  EntityManagerInterface $em, Doleance $doleance)
    {
        $doleonce = new Doleance();
        //$data = json_decode($request->getContent(), true);
        $doleonce->setSubject($request->request->get('subject'));
        $doleonce->setEmail($request->request->get('email'));
        $doleonce->setDescription($request->request->get('description'));
        $doleonce->setPhone($request->request->get('phone'));

        $doleance->setSubject($doleonce->getSubject());
        $doleance->setEmail($doleonce->getEmail());
        $doleance->setDescription($doleonce->getDescription());
        $doleance->setPhone($doleonce->getPhone());

        // $em->persist($doleance->getDescription());
        // $em->flush();
        return new JsonResponse([
            //'success_message' => 'Thank you for registering'
            'success_message' => $doleance
        ]);
        // $data = json_decode($request->getContent(), true);

        // $doleonce = new Doleance();
        // // $newdoleonce = [
        // //     'subject' => $data['subject'],
        // //     'description' => $data['description'],
        // //     'email' => $data['email'],
        // //     'phone' => $data['phone'],
        // // ];
    }
}
