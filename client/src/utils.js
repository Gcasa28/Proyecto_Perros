const backGroundImage = "https://images4.alphacoders.com/108/thumb-1920-1085014.jpg"

export const styles = {
    stylesLandingPage:{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttomLandingPage:{
            padding: '10px 20px',
            fontSize: '1.5rem',
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
                 
    },
    fondoPantalla:{
        backgroundImage:`url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh'
    }
};

export const stylesCard = {
    container: {
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: '"Poppins", sans-serif'
    },
    body: {
      backgroundColor: '#eff3ff'
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
    },
    card: {
        width: '350px',
        margin: '25px',
        marginBottom: '-10px',
        verticalAlign: 'top'
    },
    cardContent: {
      position: 'relative',
      width: '100%',
      padding: '30px 20px',
      boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
      borderRadius: '10px',
      display: 'flex', // Usamos flexbox para alinear verticalmente los elementos
      flexDirection: 'column', // Alineación vertical
      justifyContent: 'space-between', // Espacio uniforme entre elementos
      minHeight: '300px',
    },
    image: {
        display: 'block',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        position: 'relative',
        margin: '20px auto'
    },
    name: {
      textAlign: 'center',
      fontWeight: '600'
    },
    button: {
      display: 'block',
      padding: '15px 60px',
      fontSize: '18px',
      backgroundColor: '#101010',
      color: '#ffffff',
      position: 'relative',
      margin: '30px auto',
      border: 'none',
      borderRadius: '5px'
    }, 
    temperaments: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '20px 0 40px 0',
    },
    temperamentItem: {
      fontSize: '1em',
      margin: '5px 0',
      fontWeight: 'bold',
    },
    temperamentsList: {
      listStyleType: 'none',
      padding: '0',
      textAlign: 'left',
      margin: 'auto',
    },
    dogImage: {
        width: '60%',
        height: '250px',
        objectFit: 'cover', 
        objectPosition: '50% 20%'
      }
  };

  export const temperamentos = [
    "Stubborn",
    "Curious",
    "Playful",
    "Adventurous",
    "Active",
    "Fun-loving",
    "Aloof",
    "Clownish",
    "Dignified",
    "Independent",
    "Happy",
    "Wild",
    "Hardworking",
    "Dutiful",
    "Outgoing",
    "Friendly",
    "Alert",
    "Confident",
    "Intelligent",
    "Courageous",
    "Loyal",
    "Brave",
    "Docile",
    "Responsive",
    "Composed",
    "Receptive",
    "Faithful",
    "Loving",
    "Protective",
    "Trainable",
    "Responsible",
    "Energetic",
    "Gentle",
    "Affectionate",
    "Devoted",
    "Assertive",
    "Dominant",
    "Strong Willed",
    "Obedient",
    "Reserved",
    "Kind",
    "Sweet-Tempered",
    "Tenacious",
    "Attentive",
    "Steady",
    "Bold",
    "Proud",
    "Reliable",
    "Fearless",
    "Lively",
    "Self-assured",
    "Cautious",
    "Eager",
    "Good-natured",
    "Spirited",
    "Companionable",
    "Even Tempered",
    "Rugged",
    "Fierce",
    "Refined",
    "Joyful",
    "Agile",
    "Amiable",
    "Excitable",
    "Determined",
    "Self-confidence",
    "Hardy",
    "Calm",
    "Good-tempered",
    "Watchful",
    "Hard-working",
    "Feisty",
    "Cheerful",
    "Sensitive",
    "Easygoing",
    "Adaptable",
    "Trusting",
    "Lovable",
    "Territorial",
    "Keen",
    "Familial",
    "Rational",
    "Bright",
    "Quick",
    "Powerful",
    "Gay",
    "Stable",
    "Quiet",
    "Inquisitive",
    "Strong",
    "Sociable",
    "Patient",
    "Suspicious",
    "Great-hearted",
    "Merry",
    "Vocal",
    "Tolerant",
    "Mischievous",
    "People-Oriented",
    "Bossy",
    "Cunning",
    "Athletic",
    "Boisterous",
    "Cooperative",
    "Trustworthy",
    "Self-important",
    "Respectful",
    "Thoughtful",
    "Generous",
    "Cat-like",
    "Sturdy",
    "Benevolent",
    "Clever",
    "Bubbly",
    "Opinionated",
    "Aggressive",
    "Extroverted",
    "Charming",
    "Unflappable",
    "Spunky",
    "Diligent",
    "Willful",
    "Fast",
    "Vigilant",
  ];