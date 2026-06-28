import * as crypto from "crypto";

import { Request, Response }
from "express";

import { createArticleService }
from "../../bootstrap/createArticleService";

import { createAuditService }
from "../../bootstrap/createAuditService";

export class ArticleController {

  private articles =
    createArticleService();

  private audit =
    createAuditService();

  getAllArticles = async (
    _req: Request,
    res: Response
  ) => {

    const data =
      await this.articles.getAll();

    return res.json({
      success: true,
      data
    });
  };

  getArticleBySlug = async (
    req: Request,
    res: Response
  ) => {

    const article =
      await this.articles.getBySlug(
        String(req.params.slug)
      );

    if (!article) {

      return res.status(404).json({
        success: false
      });
    }

    return res.json({
      success: true,
      data: article
    });
  };

  createArticle = async (
    req: Request,
    res: Response
  ) => {

    await this.articles.create(
      req.body.entityId,
      req.body
    );

    await this.audit.log({

      id:
        crypto.randomUUID(),

      actorId:
        String(
          req.headers["x-user-id"]
          || "unknown"
        ),

      action:
        "create_article",

      entityType:
        "article",

      entityId:
        String(
          req.body.id
        ),

      timestamp:
        new Date()
          .toISOString()
    });

    return res.status(201).json({
      success: true
    });
  };

  updateArticle = async (
    req: Request,
    res: Response
  ) => {

    const article =
      await this.articles.getBySlug(
        req.body.slug
      );

    if (!article) {

      return res.status(404).json({
        success: false
      });
    }

    article.versions.push({

      version:
        article.versions.length + 1,

      content:
        req.body.content,

      editorId:
        String(
          req.headers["x-user-id"]
          || "unknown"
        ),

      createdAt:
        new Date()
          .toISOString()
    });

    article.metadata.updatedAt =
      new Date()
        .toISOString();

    const actorId = String(
      req.headers["x-user-id"]
      || "unknown"
    );

    await this.articles.update(
      actorId,
      article.id,
      article
    );

    await this.audit.log({

      id:
        crypto.randomUUID(),

      actorId:
        String(
          req.headers["x-user-id"]
          || "unknown"
        ),

      action:
        "update_article",

      entityType:
        "article",

      entityId:
        article.id,

      timestamp:
        new Date()
          .toISOString()
    });

    return res.json({
      success: true
    });
  };
}
