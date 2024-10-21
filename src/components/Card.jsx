export default function Card({...props}) {

  function handleClick() {
    let card = props.cardObj;
    card.visible = (!card.visible);
    props.cardUpdateFunction(card);

  }

  const btnDisabled = (props.cardObj.disabled)?true:false;
  const btnClass = (btnDisabled?'btnDisabledClass':'btnClass');
  
  return (
    <>
      <section className="card" >
        <button onClick={handleClick} className={btnClass} disabled={btnDisabled}>
          <h1>{props.cardObj.visible == true ? props.cardObj.title : "X"}</h1>
          <p>click to {props.cardObj.visible == true?'close':'open'}</p>
        </button>
      </section>
    </>
  );
}
