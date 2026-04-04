export interface Publication {
  title: string;
  date: string;
  authors: string[];
  abstract: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    title: "Membership, Governance, and Lobbying",
    date: "2021",
    authors: ["Clemens Fiedler", "Maria Larrain", "Jens Prüfer"],
    abstract:
      "Standard-setting organizations (SSOs) are collectively self-governed industry associations, formed by innovators and implementers. They are the main organizational form to agree on and manage technical standards, and form the foundation for many technological and economic sectors. Constructing a model, we study the incentives of heterogeneous innovators and implementers to join an SSO, which is endogenously formed. We also study the effect of SSO governance on membership incentives and on members' lobbying efforts to get their technologies included in the standard. We show that, depending on parameter realizations, one of four equilibrium types arises uniquely. The results can reconcile existing evidence, especially that many SSO member firms are small. We show that raising the influence of implementers within the SSO increases the standard's market coverage and lowers royalty rates but it erodes the innovators' incentives to contribute to the standard. This results shows how the incentives of both type of firms are conflicting within an SSO and need to be carefully weighted for it to be successful.",
  },
  {
    title: "Standards and the Common Good: How Competition Fosters Cooperation?",
    date: "2018",
    authors: ["Clemens Fiedler"],
    abstract:
      "The interconnected nature of modern markets and the steep costs of research and development force direct competitors to cooperate in their R&D efforts. Cooperation can take many forms ranging from collaborative standard-setting to research joint ventures and open-knowledge initiatives. Firms face a trade-off between their objectives. Collaboration between firms benefits them collectively as it allows firms to share the results of their R&D investments. However, it also harms them as their investments also benefit their competitors. In this paper, we study how the market characteristics can encourage or discourage firms to invest in a shared standard. We show that the quality of the products sold in the market exhibits a hump-shaped reaction with respect to the number of firms in the standard and the degree of competition firms face from outside the standard. We find that market-based entry in the standard is too high in case of a low competition from outside the standard as entry undermines the incentives of firms to cooperate. Thus, higher entry barriers can increase investment in the standard.",
  },
  {
    title: "Should we Intervene in the Demand of Firms in the Software Market?",
    date: "2018",
    authors: ["Clemens Fiedler"],
    abstract:
      "In this paper, we study how three characteristics typical to modern software markets impact the strategic decisions of firms. First, instead of charging prices to end-users firms generate revenue indirectly via advertisement or secondary products and compete on quality. Second, the costs of providing a high-quality product increase in the number of customers but at a quickly decreasing rate. Third, firms are asymmetric in size, with large and small firms coexisting in the same market. We show that firms' quality choices can be strategic complements or substitutes. A large firm reacts to an increase in the quality of a small firm by lowering its quality, while a small firm reacts to an increase in the quality of the large firm by raising its efforts. Thus, large firms act as quality leaders. We use these results to study an intervention aimed at moving market shares from a large to a small firm. Such an intervention was tried by the European Commission in the web browser market. We show that in a software market, moving market shares from a large to a small firm can lower the incentives to provide a high-quality product for both firms, thus harming all customers.",
  },
];
