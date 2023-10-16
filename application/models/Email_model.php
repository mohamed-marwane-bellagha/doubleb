<?php

class Email_model extends CI_Model
{
	public function __construct()
	{
		parent::__construct();
		$this->load->database();
		$this->load->library('session');
	}
	public function add_email(){
		$data = array(
			'email' => $this->input->post('email')
		);
		$data = $this->security->xss_clean($data);
		return $this->db->insert('email', $data);
	}
}
