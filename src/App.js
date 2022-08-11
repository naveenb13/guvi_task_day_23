import './App.css';
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const column = [
    {
      plan: "Free",
      currency: "$",
      price: 0,
      duration: "month",
      features: [
        {
          points: "Single User",
          isEnable: true,
        },
        {
          points: "5GB Storage",
          isEnable: true,
        },
        {
          points: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          points: "Community Access",
          isEnable: true,
        },
        {
          points: "Unlimited Private Projects",
          isEnable: false,
        },
        {
          points: "Dedicated Phone Support",
          isEnable: false,
        },
        {
          points: "Free Subdomain",
          isEnable: false,
        },
        {
          points: "Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      plan: "Plus",
      currency: "$",
      price: 9,
      duration: "month",
      features: [
        {
          points: "5 Users",
          isEnable: true,
          isBold: true,
        },
        {
          points: "50GB Storage",
          isEnable: true,
        },
        {
          points: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          points: "Community Access",
          isEnable: true,
        },
        {
          points: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          points: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          points: "Free Subdomain",
          isEnable: true,
        },
        {
          points: "Monthly Status Reports",
          isEnable: false,
        },
      ],
    },
    {
      plan: "Pro",
      currency: "$",
      price: 49,
      duration: "month",
      features: [
        {
          points: "Unlimited Users",
          isEnable: true,
          isBold: true,
        },
        {
          points: "150GB Storage",
          isEnable: true,
        },
        {
          points: "Unlimited Public Projects",
          isEnable: true,
        },
        {
          points: "Community Access",
          isEnable: true,
        },
        {
          points: "Unlimited Private Projects",
          isEnable: true,
        },
        {
          points: "Dedicated Phone Support",
          isEnable: true,
        },
        {
          points: "Unlimited Free Subdomains",
          isEnable: true,
          isBold: true,
        },
        {
          points: "Monthly Status Reports",
          isEnable: true,
        },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {column.map((item) => {
            return <Card item={item}></Card>
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
