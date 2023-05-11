<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Mail;

class FeedbackController extends Controller
{
    public function sendMail(){
        $data = [
            'name' => Request::input('name'),
            'email' => Request::input('email'),
            'description' => Request::input('description'),
            'option' => Request::input('option'),
        ];

        Mail::send('emails.feedback', $data, function($message){
            $message->to(env('MAIL_FROM_ADDRESS'))->subject('Visszajelzés');
        });
        
        return redirect()->back();
    }
}
