const Row = ({ title, sub, tag, tagClass = "" }) => (
  <div className="row">
    <div>{title}{sub && <small>{sub}</small>}</div>
    {tag && <span className={`tag ${tagClass}`}>{tag}</span>}
  </div>
);

const screens = {
  login: (
    <>
      <div className="dtitle">Welcome back</div>
      <small className="lbl">Email address</small>
      <div className="field">you@email.com</div>
      <small className="lbl">Password</small>
      <div className="field">••••••••••</div>
      <div className="btnmock">Sign in</div>
      <small className="note">Don't have an account? Contact your dietitian to get access.</small>
    </>
  ),
  plan: (
    <>
      <div className="dtitle">Today's meal plan</div>
      <Row title="Breakfast" sub="Idli x3, sambar" tag="Done ✓" />
      <Row title="Lunch" sub="Rice, dal, vegetable curry" tag="Done ✓" />
      <Row title="Snack" sub="Fruit and nuts" tag="Next" />
      <Row title="Dinner" sub="Chapati, paneer sabzi" tag="Later" tagClass="muted" />
    </>
  ),
  log: (
    <>
      <div className="dtitle">Log a meal</div>
      <div className="field">🔍 Search Indian foods</div>
      <Row title="Idli" sub="1 piece" tag="+ Add" />
      <Row title="Sambar" sub="1 bowl" tag="+ Add" />
      <Row title="Curd" sub="1 cup" tag="+ Add" />
      <Row title="Can't find it?" sub="Add your own food" tag="Custom" />
    </>
  ),
  track: (
    <>
      <div className="dtitle">Weekly compliance</div>
      <div className="big">82%</div>
      <div className="bar"><i style={{ "--w": "82%" }} /></div>
      <Row title="Lunch logged" sub="As planned" tag="✓" />
      <Row title="Snack was different" sub="Shared with dietitian" tag="Noted" tagClass="warn" />
    </>
  ),
  progress: (
    <>
      <div className="dtitle">My progress</div>
      <svg viewBox="0 0 200 90" className="chart" role="img" aria-label="Weight chart going down over time">
        <polyline className="areafill" points="5,12 40,22 75,30 110,46 145,54 195,68 195,88 5,88" fill="#2563eb" />
        <polyline className="draw" pathLength="1" points="5,12 40,22 75,30 110,46 145,54 195,68" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="photos"><div>Week 1</div><div>Week 6</div></div>
      <Row title="Progress note" sub="Added by you" tag="Edit" />
    </>
  ),
  dietitian: (
    <>
      <div className="dtitle">Weekly summary</div>
      <div className="big">82%</div>
      <small className="note">compliance this week</small>
      <div className="bar"><i style={{ "--w": "82%" }} /></div>
      <Row title="Progress reviewed" sub="By your dietitian" tag="✓" />
      <Row title="Plan updated" sub="For next week" tag="New" />
    </>
  ),
};

export default function Device({ screen }) {
  return <div className="device">{screens[screen]}</div>;
}
