import {Observable} from "rxjs/Rx";

/**
 * A class-interface to define some commons of a service providing access to the knowledge base.
 * This is a class-interface (or restricting interface) - a special construct that is an abstract class but serves as an
 * interface to enforce some public members and hide others.
 * @class
 */
export abstract class KnowledgeService {

    /**
     * Should return an {@link Array} of fields of the category by provided system name.
     * @param {string} categorySystemName - The system name of a category.
     * @returns {Array<any>} All the fields that belong to the category.
     */
    public abstract getCategoryFields(categorySystemName: string): Observable<any>;

}
