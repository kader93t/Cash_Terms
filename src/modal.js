import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
function Section({ title, content }) {
  const { width } = useWindowSize();

  return (
    <div style={{ width: "100%", marginBottom: "15px" }}>
      <div
        style={{
          color: "#5E5152",
          fontSize: width > 700 ? "16px" : "12px",
          fontFamily: "Poppins",
          fontWeight: 700,
          lineHeight: "30px",
          lineHeight: width > 700 ? "30px" : "22px",
        }}
      >
        {title}
        <br />
      </div>
      <div
        style={{
          color: "#5E5152",
          fontSize: width > 700 ? "16px" : "12px",
          fontFamily: "Poppins",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: width > 700 ? "30px" : "22px",
        }}
      >
        {content}
      </div>
    </div>
  );
}
export function TermsAndConditions() {
  const { width } = useWindowSize();
  const [continueReading, setContinueReading] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Handlers
  const onClick = () => {
    localStorage.setItem("readTerms", true);
    setContinueReading(true);
  };
  const checkRead = () => {
    return localStorage.getItem("readTerms");
  };

  return (
    <div>
      <Modal show={!checkRead()} onHide={() => {}} size="xl">
        <Modal.Header
          style={{
            backgroundColor: "#BE3A3D",
            textAlign: "center",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            padding: width > 700 ? "30px 0px" : "20px 5px",
            boxShadow: "2px 2px 6px 1px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            style={{
              color: "white",
              textAlign: "center",
              width: "100%",
              height: "100%",
              fontSize: width > 700 ? "25px" : "16px",
              fontFamily: "Poppins",
              fontWeight: 600,
              lineHeight: "30px",
            }}
          >
            Confidentialité et traitement « des données à caractère personnel »
          </div>
        </Modal.Header>
        <Modal.Body
          style={{
            maxHeight: "550px",
            overflowY: "auto",
            width: "100%",
            whiteSpace: "wrap",
          }}
        >
          <Section
            title="Chers visiteurs,"
            content={`
            Nous sommes ravis de vous accueillir sur notre espace web et tenons
            à vous assurer que le respect de votre vie privée et la protection
            de vos données à caractère personnel sont d'une importance capitale
            pour nous. En accédant à notre site web et à nos différentes
            plateformes officielles sur les réseaux sociaux, vous confirmez
            votre approbation des règles d’utilisation de vos « données à
            caractère personnel », selon la réglementation en vigueur.
            Conformément à la loi N° 18-07 du 10 juin 2018, relative à la
            protection des personnes physiques dans le traitement « des données
            à caractère personnel », CASH Assurances s’engage à traiter et à
            sécuriser vos données personnelles et vous assure de leur stricte
            utilisation aux fins explicites et préalablement déterminées pour
            lesquelles elles ont été collectées. Vous pouvez accéder à tous les
            détails liés à l’utilisation de vos données via le lien « En savoir
            plus », ou contacter notre DPO à tout moment pour vous informer et
            ajuster les paramètres de confidentialité.`}
          />
          {!continueReading && (
            <Button
              onClick={() => {
                setContinueReading(true);
              }}
              style={{
                color: "#BE3A3D",
                backgroundColor: "transparent",
                border: "none",
                fontFamily: "Poppins",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "30px",
                textDecorationLine: "underline",
              }}
            >
              En savoir plus
            </Button>
          )}
          {continueReading && (
            <div>
              <Section
                title="Qui est le responsable du traitement de vos données personnelles ?"
                content={`La Compagnie d’assurances des Hydrocarbures, par abréviation CASH
                Assurances Spa, est une compagnie ayant pour mission de fournir
                des couvertures d’assurances dommages multirisques. Elle est
                responsable du traitement de vos données personnelles. Les termes
                « Nos », « nous », « notre » et « CASH Assurances » font référence
                à la Compagnie d’Assurances des Hydrocarbures.`}
              />
              <Section
                title="Quelles données personnelles que nous recueillons et traitons ?"
                content={
                  <>
                    {`Est considérée comme « donnée à caractère personnel », toute information se
          rapportant à une personne physique identifiée ou identifiable directement ou
          indirectement, par référence à un identifiant, tel un nom, une adresse, une
          immatriculation de véhicule, un numéro de téléphone ou de la combinaison de
          plusieurs de ces éléments. Les données susceptibles d’être collectées sont les
          suivantes :`}
                    <ul>
                      <li>
                        Données d’identification :(Nom et prénom, date et lieu
                        de naissance, sexe, situation sociale et familiale) ;
                      </li>
                      <li>
                        Données de contact (adresse électronique, numéro de
                        téléphone – mobile et/ou fixe, adresse de résidence) ;
                      </li>
                      <li>
                        Les données liées à votre Carte Nationale d’identité,
                        votre permis de conduire ou passeport
                      </li>
                      <li>Situation professionnelle</li>
                      <li>
                        Les données liées aux biens assurables (Habitation, bien
                        immobilier, véhicule etc.)
                      </li>
                      <li>
                        N° de carte CIB ou DAHABIA lors des paiements
                        électroniques des contrats validés
                      </li>
                    </ul>
                  </>
                }
              />
              <Section
                title="Comment sont collectées vos données personnelles ?"
                content={
                  <>
                    {" "}
                    CASH Assurances collecte et traite vos données personnelles,
                    principalement, lors des opérations suivantes :
                    <ul>
                      <li>Etablissement de devis en ligne</li>
                      <li>
                        Souscription et exécution des Contrats d'assurance
                      </li>
                      <li>Analyse statistique et marketing</li>
                      <li>
                        Téléchargement de votre candidature (CV ou autres)
                      </li>
                      <li>
                        Utilisation de la messagerie lors de l’abonnement à la
                        newsletter
                      </li>
                      <li>Accès à l’espace client</li>
                    </ul>
                  </>
                }
              />

              <Section
                title="Pour quelles finalités nous traitons vos données personnelles ?"
                content={`Vos données sont collectées dans le cadre de l’exécution des services et prestations
demandés sur notre site web et nos différentes plateformes sur les réseaux sociaux.
Lors de la collecte de vos données personnelles, vous êtes informés si certaines
données personnelles doivent être obligatoirement renseignées ou si elles sont
facultatives. Les données identifiées par un astérisque * sont obligatoires`}
              />
              <Section
                title="Comment pourrions-nous partager vos données personnelles ?"
                content={
                  <>
                    {` 
                     CASH Assurances collecte vos données personnelles pour ne les utiliser qu’à des
finalités explicites et préalablement déterminées et elles ne peuvent, en aucun cas,
être vendues ou utilisées à des buts lucratifs. Ces données peuvent éventuellement
être partagées, en partie ou en intégralité, dans le dans le strict respect des
dispositions réglementaires. Elles peuvent ainsi être communiquées ou partagées
avec:`}
                    <ul>
                      <li>
                        Les autorités gouvernementales compétentes conformément
                        aux exigences légales et réglementaires
                      </li>
                      <li>
                        Le personnel de CASH Assurances en charge de la gestion
                        des contrats, de la relation commerciale, de la gestion
                        de la ressource humaine, des services informatiques et
                        digitaux, du marketing et de la communication
                      </li>
                      <li>
                        Les sous-traitants, partenaires, prestataires et tiers
                        impliqués dans la gestion des contrats d'assurance
                      </li>
                    </ul>
                  </>
                }
              />

              <Section
                title="Comment nous garantissons la sécurité de vos données à
caractère personnel ?"
                content={`CASH Assurances ne traite qu’avec des sous-traitants, partenaires et prestataires de
service respectueux de la réglementation en matière de protection des « données à
caractère personnel ».
CASH Assurances et chacun de ses sous-traitants, partenaires et prestataires de
service veillent sur la mise en œuvre des mesures techniques et organisationnelles
appropriées pour garantir la sécurité de vos données personnelles, leur
confidentialité et leur protection contre le vol, la publication accidentelle, la
destruction ou toute autre utilisation inappropriée.
Vos données personnelles collectées ne peuvent faire l’objet d’un transfert hors du
territoire national que sur autorisation préalable de l’Autorité Nationale de la Protection des Données à caractère Personnel (ANPDP).`}
              />
              <Section
                title="Quelle est la durée de conservation de vos données personnelles ?"
                content={`Vos données personnelles, recueillies et traitées, sont conservées pour une durée n’excédant pas celle nécessaire aux finalités pour lesquelles elles ont été collectées.`}
              />
              <Section
                title="Comment exercer vos droits sur vos données personnelles ?"
                content={
                  <>
                    {`
La loi n°18-07 du 10 juin 2018 garantit vos droits en matière de protection de vos données personnelles. Vous pouvez consulter le site de l’ANPDP (Autorité Nationale de Protection des Données à caractère Personnel) à l’adresse https://www.anpdp.dz pour de plus amples renseignements.
Vous avez le droit d'accéder aux données vous concernant et de demander de les rectifier. Vous pouvez également exercer votre droit d’opposition à l'utilisation de vos données ou demander la limitation de leur traitement. Vous pouvez faire valoir vos droits auprès du responsable de traitement des données au niveau de CASH Assurances,
`}
                    <ul>
                      <li>
                        <b>Par courrier à l'adresse postale: </b> 135, Boulevard
                        des Martyrs. El Madania. Alger
                      </li>
                      <li>
                        <b>Par courriel à l'adresse: </b>{" "}
                        dpo@cash-assurances.dz{" "}
                      </li>
                    </ul>
                  </>
                }
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseOut={() => {
              setHovered(false);
            }}
            style={{
              backgroundColor: hovered ? "#BE3A3D" : "#CBD5E1",
              color: hovered ? "#fff" : "#94A3B8",
              border: "none",
            }}
            onClick={() => {
              onClick();
            }}
          >
            Je comprends
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
