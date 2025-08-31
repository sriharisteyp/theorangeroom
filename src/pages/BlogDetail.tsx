
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="gentle-shadow">
              <CardContent className="p-8">
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-foreground mb-6">{post.title}</h1>
                
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-6 border-b">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    <span>{post.readTime}</span>
                  </div>
                  {post.author && (
                    <div className="flex items-center">
                      <User className="w-5 h-5 mr-2 text-primary" />
                      <span>{post.author}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="text-muted-foreground leading-relaxed">
                    {post.content ? (
                      <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
                    ) : (
                      <p>Full blog content will be available here...</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
