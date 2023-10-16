<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->helper('url_helper');
		$this->load->library('session');
		$this->load->library('form_validation');
		$this->load->helper('url');
		$this->load->library('session');
	}
	public function index()
	{
		$data['title']='Accueil';
		$this->load->view('head', $data);
		$this->load->view('header', $data);
		$this->load->view('welcome_message');
	}
	public function visions()
	{
		$data['title']='Visions';
		$this->load->view('head', $data);
		$this->load->view('header', $data);
		$this->load->view('visions');
	}
}
