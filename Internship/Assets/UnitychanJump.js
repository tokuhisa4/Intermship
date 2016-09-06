#pragma strict

function Start () {

}

function Update () {
    var myAnimator=GetComponent(Animator);
    var state:AnimatorStateInfo=myAnimator.GetCurrentAnimatorStateInfo(0);
    
    if (Input.GetKey(KeyCode.Space) && state.IsName("Locomotion.WalkRun"))
    {
        myAnimator.SetBool("Jump",true);            
    }

    if(state.IsName("Locomotion.Jump"))
    {
        myAnimator.SetBool("Jump",false);
    }

}