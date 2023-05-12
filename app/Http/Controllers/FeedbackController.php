<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\FeedbackRequest;
use Illuminate\Support\Facades\Mail;

class FeedbackController extends Controller
{
    public function sendMail(FeedbackRequest $request){
        $data = [
            'name' => $request->name,
            'email' =>  $request->email,
            'description' => $request->description,
            'option' => $request->option,
        ];

        Mail::send('emails.feedback', $data, function($message){
            $message->to(env('MAIL_FROM_ADDRESS'))->subject('Visszajelzés');
        });
        
        return redirect()->back();
    }
}
