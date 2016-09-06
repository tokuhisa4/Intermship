#pragma strict

function Start () {

}

function Update () {
 var myAnimator=GetComponent(Animator);     
 if (Input.GetKey(KeyCode.H))
 {
  myAnimator.SetBool("HandsUp",true);            
 }

 var state:AnimatorStateInfo=myAnimator.GetCurrentAnimatorStateInfo(0);
 if(state.IsName("Locomotion.HandsUp"))
  {
    myAnimator.SetBool("HandsUp",false);         
  }
 }