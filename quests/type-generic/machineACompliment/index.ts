// Étape 1: Créer la classe ComplimentMachine
class ComplimentMachine {
  // Étape 2: Ajouter la méthode compliment
  public compliment<T>(person: T): string {
    const personType = this.getPersonType(person);
    const compliment = this.getComplimentForPersonType(personType);
    return `Hey ${person}, ${this.compliment}`;
  }
  // 4. La méthode privée `getPersonType` permettra de déterminer le type de personne
  // en fonction du paramètre donné. 
  // Par exemple, si le paramètre est de type `string`, la méthode renverra "ami". 
  //Si le paramètre est de type `number`, la méthode renverra "collègue". 
  //Si le paramètre est de type `boolean`, la méthode renverra "membre de la famille".
  
  public getPersonType<T>(person: T): string {
    console.log("yay!");
    if (typeof person === "string") {
      return "ami";
    } else if (typeof person === "number") {
      return "collègue";
    } else if (typeof person === "boolean") {
      return "membre de la famille";
    } else {
      throw new Error("Type de personne non pris en charge.");
    }
  }
  private getComplimentForPersonType(personType: string): string {
    switch (personType) {
      case 'ami':
        return 'gentil';
        case 'collègue':
          return 'intelligent';
          case 'membre de la famille':
            return 'drôle';
        default:
          throw new Error('Type de personne non pris en charge');
        }
      }
    }
    const cBientoLeur= new ComplimentMachine;
    cBientoLeur.getPersonType("test");
