<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('/landingpage', 'landingpage')->name('landingpage');
    Route::inertia('/about', 'about')->name('about');
    Route::inertia('/admission', 'admission')->name('admission');
    Route::inertia('/academe', 'academe')->name('academe');
    Route::inertia('/studentalumni', 'studentalumni')->name('studentalumni');
    Route::inertia('/researhextension', 'researhextension')->name('researhextension');
});

require __DIR__.'/settings.php';
