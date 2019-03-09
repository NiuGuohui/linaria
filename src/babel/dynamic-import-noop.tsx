import syntax from "@babel/plugin-syntax-dynamic-import";

export default function dynamic({ types: t }) {
  return {
    inherits: syntax,

    visitor: {
      Import(path) {
        const noop = t.arrowFunctionExpression([], t.identifier("undefined"));

        path.parentPath.replaceWith(
          t.objectExpression([
            t.objectProperty(t.identifier("then"), noop),
            t.objectProperty(t.identifier("catch"), noop)
          ])
        );
      }
    }
  };
}
